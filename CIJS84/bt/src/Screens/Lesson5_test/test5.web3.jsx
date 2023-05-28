import Web3 from 'web3';
import { useState } from 'react';

const Test5 = () => {
  const [balance, setBalance] = useState(0);

  const testnet = 'https://bsc-dataseed1.binance.org:443';
  const walletAddress = '0x7755f284ecbb16c4fd58b947b6eba613ffeed3bb';

  const web3 = new Web3(new Web3.providers.HttpProvider(testnet));

  //console.log(web3);

  async function get_balance() {
    let bal = await web3.eth.getBalance(walletAddress);
    bal = bal / 10 ** 18;
    return bal;
  }

  //   get_balance().then(function (result) {
  //     setBalance(result);
  //   });

  const handleClick = async (e) => {
    get_balance().then((result) => {
      setBalance(result);
    });
  };

  return (
    <div>
      <div> Test Web3</div>
      <button onClick={handleClick}>Get Balance</button>
      <div> {balance}</div>
    </div>
  );
};

export default Test5;
