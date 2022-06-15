const result = ({ balance }: { balance: any }) => {
  return <tr key={balance.uid}></tr>;
};

export default result;
