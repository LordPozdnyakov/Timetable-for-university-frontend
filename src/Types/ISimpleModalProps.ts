export default interface ISimpleModalProps {
  title: string,
  content: string,
  isModalVisible: boolean,
  hideModal: () => void,
  handleNo: () => void,
  handleYes: () => void
}