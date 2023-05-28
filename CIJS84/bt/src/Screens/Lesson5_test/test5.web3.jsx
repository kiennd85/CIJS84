import Web3 from 'web3';
import { useState } from 'react';

const Test5 = () => {
  const [balance, setBalance] = useState(0);

  const testnet = 'https://bsc-dataseed1.binance.org:443';
  const walletAddress = '0x7C81b1303ADFF4ff5B6Ca6297c318268EeBF1fc7';

  const web3 = new Web3(new Web3.providers.HttpProvider(testnet));

  //console.log(web3);

  async function get_balance() {
    let bal = await web3.eth.getBalance(walletAddress);
    bal = bal / 10 ** 18;
    return bal;
  }

  const handleClick = (e) => {
    const bal = get_balance();
    console.log(bal);
    //setBalance(bal);
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
