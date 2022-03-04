import React, { useState } from 'react';
import { Modal } from '../common/Modal';
import styled from 'styled-components';
import { Flex } from '../common/Layout';
import { ContainerText } from '../common/Layout/Text';
import { Button } from '../common/Button';
import { ReactComponent as Vector } from '../../../assets/images/vector.svg';
import StyledIcon from '../common/SVG';
import MintReputationModal from './MintRepModal';

interface ActionModalProps {
  isOpen: boolean;
  onCancel: () => void;
}

const CoreWrapper = styled(Flex)`
  width: 100%;
  margin-bottom: 16px;
`;

const ExternalWrapper = styled(Flex)`
  width: 100%;
`;

const Wrapper = styled(Flex)`
  width: 100%;
  margin: 24px auto;
`;

const ActionsButton = styled(Button)`
  width: 90%;
  height: 40px;
  margin: 6px 0;
  flex-direction: row;
  justify-content: left;
  &:active,
  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.text};
  }
`;

const WrapperText = styled(ContainerText)`
  justify-content: left;
  flex-direction: row;
  width: 85%;
`;

const ButtonText = styled(ContainerText)`
  justify-content: space-between;
  flex-direction: row;
`;

const ExternalButton = styled(ActionsButton)`
  justify-content: space-between;
`;

const ActionModal: React.FC<ActionModalProps> = ({ isOpen, onCancel }) => {
  //TODO: remove hardcoded external contracts with actual data

  const [mintRep, setMintRep] = useState(false);

  const handleClose = () => setMintRep(false);

  return (
    <Modal
      isOpen={isOpen}
      onDismiss={onCancel}
      header={<div> Add Action </div>}
      maxWidth={300}
    >
      <Wrapper>
        <MintReputationModal isOpen={mintRep} onCancel={handleClose} />
        <CoreWrapper>
          <WrapperText variant="bold" color="grey">
            Core
          </WrapperText>
          <ActionsButton variant="secondary" onClick={() => setMintRep(true)}>
            <StyledIcon src={Vector} />
            Transfer & Mint
          </ActionsButton>
        </CoreWrapper>
        <ExternalWrapper>
          <WrapperText variant="bold" color="grey">
            External Contracts
          </WrapperText>
          <ExternalButton variant="secondary">
            DXdao Controller
            <ButtonText variant="medium" color="grey">
              2 Actions
            </ButtonText>
          </ExternalButton>
          <ExternalButton variant="secondary">
            Permissions Registry
            <ButtonText variant="medium" color="grey">
              4 Actions
            </ButtonText>
          </ExternalButton>
          <ExternalButton variant="secondary">
            DXD Voting Machine
            <ButtonText variant="medium" color="grey">
              1 Actions
            </ButtonText>
          </ExternalButton>
          <ExternalButton variant="secondary">
            RegistrarWalletScheme
            <ButtonText variant="medium" color="grey">
              2 Actions
            </ButtonText>
          </ExternalButton>
          <ExternalButton variant="secondary">
            MasterWalletScheme
            <ButtonText variant="medium" color="grey">
              1 Actions
            </ButtonText>
          </ExternalButton>
          <ExternalButton variant="secondary">
            QuickWalletScheme
            <ButtonText variant="medium" color="grey">
              1 Actions
            </ButtonText>
          </ExternalButton>
          <ExternalButton variant="secondary">
            SWPRWalletScheme
            <ButtonText variant="medium" color="grey">
              1 Actions
            </ButtonText>
          </ExternalButton>
        </ExternalWrapper>
      </Wrapper>
    </Modal>
  );
};

export default ActionModal;
