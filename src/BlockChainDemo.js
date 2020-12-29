import React, { useState, useRef } from "react";
import Block from "./Block";
import SvgIcon from "./SvgIcon";
import { getHashElements } from "./crypt";
import chain from "./chain.png";

const intialBlock = getHashElements(0, "Welcome to Block Chain Demo", 0);
const MAX_BLOCK = 10;
const BlockChainDemo = () => {
  const [blockArray, setBlockArray] = useState([
    {
      id: 0,
      data: "Welcome to Block Chain Demo",
      nonce: intialBlock.nonce,
      prev: 0,
      curr: intialBlock.hash,
    },
  ]);
  const inputRef = useRef();
  const blockData = (id, data, nonce, prev, curr) => {
    return {
      id: id,
      data: data,
      nonce: nonce,
      prev: prev,
      curr: curr,
    };
  };
  const pushBlock = (data) => {
    if (!data) return;
    let currentHashElements;
    if (blockArray.length <= MAX_BLOCK) {
      let id = blockArray.length;
      let prev = blockArray[id - 1].curr;
      currentHashElements = getHashElements(id, data, prev);
      let block = blockData(
        id,
        data,
        currentHashElements.nonce,
        prev,
        currentHashElements.hash
      );
      setBlockArray(() => [...blockArray, block]);
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
                blockdata={block}
                setChildBlock={setBlockArray}
                childBlock={blockArray}
              />
              <div className="col-md-3"></div>
            </div>
            <div className="text-center">
              <img src={chain} alt="chain" height="90px"></img>
            </div>
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
