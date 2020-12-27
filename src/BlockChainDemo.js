import React, { useState } from "react";
import Block from "./Block";
import SvgIcon from "./SvgIcon";
import { getHash } from "./crypt";
const BlockChainDemo = () => {
  const [blockArray, setBlockArray] = useState([]);
  const [hashArray, setHashArray] = useState([]);
  const blockData = (id, data, nonce, isChanged) => {
    return {
      id: id,
      data: data,
      isChanged: isChanged,
      nonce: nonce,
    };
  };
  const pushBlock = (data) => {
    let currentHash;
    if (!hashArray) {
      currentHash = "000000000000000000000000000000000000000000";
      setHashArray(() => [currentHash]);
      setBlockArray(() => [null]);
    } else if (hashArray.length <= 10) {
      let id = hashArray.length;
      let prev = hashArray[id - 1];
      currentHash = getHash(id, data, prev);
      let block = blockData(id, data, currentHash.nonce, false);
      setHashArray(() => [...hashArray, currentHash.hash]);
      setBlockArray(() => [...blockArray, block]);
    }
  };
  return (
    <div>
      {blockArray.map((block, index) => {
        if (block)
          return (
            <div className="row mx-5">
              <div className="col-md-3"></div>

              <Block
                key={index}
                blockId={index}
                data={block.data}
                hash={hashArray[index]}
                prev={hashArray[index - 1]}
                nonce={block.nonce}
                isChanged={block.isChanged}
                className="card text-center col-md-6 my-5 p-0 border-primary"
              />
              <div className="col-md-3"></div>
            </div>
          );

        return <div></div>;
      })}

      <div
        className="d-flex justify-content-center"
        onClick={() => pushBlock("Welcome To BlockChain Demo")}
      >
        <SvgIcon
          height="35"
          width="35"
          className="bi bi-plus-square-fill"
          fillColor="#0000ff"
        />
      </div>
    </div>
  );
};

export default BlockChainDemo;
