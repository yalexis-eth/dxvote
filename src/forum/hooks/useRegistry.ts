import { useForum } from 'forum/ForumProvider';
import useSWR from 'swr';

type Query = {
  id?: string;
  type?: string;
  parent?: string;
  limit?: number;
  skip?: number;
  sortBy?: string;
  sortDirection?: string;
};

export function useRegistry(query: Query) {
  const { registry } = useForum();

  const {
    sortBy = 'created_at',
    sortDirection = 'desc',
    limit = Infinity,
    skip = 0,
    ...where
  } = query;

  const dirMap = { asc: 1, desc: -1 };

  return useSWR(registry ? 'forum/registry' : null, async () => {
    if (!registry) return null;

    console.time('Querying registry');
    const items = registry
      .query(item =>
        // Compare each key and value in where with the item eg: { type: "post" }
        Object.entries(where).every(([key, val]) => item[key] === val)
      )
      .sort((a, b) =>
        // Sort the results by key and direction
        a[sortBy] > b[sortBy] ? dirMap[sortDirection] : -dirMap[sortDirection]
      )
      .slice(skip, skip + limit);

    console.timeEnd('Querying registry');
    return items;
  });
}
