import React, { useState, useRef } from "react";
import Block from "./Block";
import SvgIcon from "./SvgIcon";
import { getHashElements, getHash } from "./crypt";
import chain from "./chain.png";

const intialBlock = getHashElements(0, "Welcome to Block Chain Demo", 0);
const MAX_BLOCK = 10;
const BlockChainDemo = () => {
  const [blockArray, setBlockArray] = useState([
    {
      id: 0,
      data: "Welcome to Block Chain Demo",
      nonce: intialBlock.nonce,
    },
  ]);
  const [hashArray, setHashArray] = useState([intialBlock.hash]);
  const inputRef = useRef();
  const blockData = (id, data, nonce) => {
    return {
      id: id,
      data: data,
      nonce: nonce,
    };
  };

  const updateHash = (newHashElements, id) => {
    setBlockArray(
      blockArray.map((block) =>
        block.id === id
          ? {
              ...block,
              nonce: newHashElements.nonce,
            }
          : block
      )
    );

    setHashArray(
      hashArray.map((hash, index) =>
        index === id ? newHashElements.hash : hash
      )
    );
  };
  const updateState = (newBlock, newCurrHash) => {
    setBlockArray(
      blockArray.map((block) =>
        block.id === newBlock.id ? { ...block, data: newBlock.data } : block
      )
    );
    setHashArray(
      hashArray.map((hash, index) =>
        updateBlockHash(hash, index, newBlock.id, newCurrHash)
      )
    );
  };
  const updateBlockHash = (hash, index, id, newCurrHash) => {
    if (index === id) {
      return newCurrHash;
    } else if (index > id) {
      let block = blockArray[index];
      return getHash(block.data, block.nonce, hashArray[index - 1], index);
    } else {
      return hash;
    }
  };
  const pushBlock = (data) => {
    if (!data) return;
    let currentHashElements;
    if (blockArray.length <= MAX_BLOCK) {
      let id = blockArray.length;
      let prev = hashArray[id - 1];
      currentHashElements = getHashElements(id, data, prev);
      let block = blockData(id, data, currentHashElements.nonce);
      setBlockArray(() => [...blockArray, block]);
      setHashArray(() => [...hashArray, currentHashElements.hash]);
      inputRef.current.focus();
      inputRef.current.scrollIntoView();
    }
  };

  return (
    <div>
      {blockArray.map((block, index) => {
        return (
          <div>
            <div className="row mx-5">
              <div className="col-md-3"></div>
              <Block
                key={index}
                blockData={block}
                hashData={{
                  curr: hashArray[index],
                  prev: index === 0 ? 0 : hashArray[index - 1],
                }}
                setParentState={updateState}
                setNewHash={updateHash}
              />
              <div className="col-md-3"></div>
            </div>
            {index < MAX_BLOCK ? (
              <div className="text-center">
                <img src={chain} alt="chain" height="90px"></img>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        );
      })}
      {blockArray.length <= MAX_BLOCK ? (
        <div className="row m-5">
          <div className="col-md-3"></div>
          <div className="card col-md-6 border-primary shadow p-3 mb-5 bg-white rounded">
            <div className="card-body">
              <input ref={inputRef} className="form-control m-3" />
              <div onClick={() => pushBlock(inputRef.current.value)}>
                <SvgIcon
                  height="35"
                  width="35"
                  className="text-center bi bi-plus-square-fill container-fluid"
                  fillColor="#0000ff"
                />
              </div>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default BlockChainDemo;
