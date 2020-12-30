import React from "react";
import { getHashElements, getHash } from "./crypt";

const Block = ({ blockData, hashData, setParentState, setNewHash }) => {
  let hashClass = "text-center mx-3 ";
  let cardClass = "card text-center col-md-6 my-5 p-0 shadow mb-5 rounded ";
  console.log(blockData);
  let isChanged = !hashData.curr.startsWith("0000");
  if (isChanged) {
    hashClass += "text-danger";
    cardClass += "border-danger";
  } else {
    hashClass += "text-primary";
    cardClass += "border-primary";
  }

  const mineHash = () => {
    let hashElements = getHashElements(
      blockData.id,
      blockData.data,
      hashData.prev
    );
    setNewHash(hashElements, blockData.id);
  };

  const updateBlock = (e) => {
    let data = e.target.value;
    let currHash = getHash(data, blockData.nonce, hashData.prev, blockData.id);
    const newBlock = {
      id: blockData.id,
      data: data,
    };
    setParentState(newBlock, currHash);
  };

  return (
    <div className={cardClass}>
      <div className="card-footer ">
        <strong>Block ID : {blockData.id}</strong>
      </div>
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <div className=" card-text">Data</div>
          {blockData.id === 0 ? (
            <div className="form-control text-muted mx-3">{blockData.data}</div>
          ) : (
            <input
              className="form-control mx-3"
              onChange={(e) => updateBlock(e)}
              value={blockData.data}
            ></input>
          )}
        </div>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <small className=" card-text">Hash</small>
          <small className={hashClass}>{hashData.curr}</small>
        </div>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <small className=" card-text">Previous Hash</small>
          <small className={hashClass}>{hashData.prev}</small>
        </div>
      </div>
      <div className="card-header ">
        <div className="d-flex justify-content-between align-items-center">
          {isChanged && (
            <div className="p-2 mining">
              <button className="btn btn-primary" onClick={() => mineHash()}>
                Mine
              </button>
            </div>
          )}
          <div className="p-2 ">
            <div
              className="card-text text-muted text-center "
              data-toggle="tooltip"
              title="Nonce"
            >
              {blockData.nonce}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Block;
