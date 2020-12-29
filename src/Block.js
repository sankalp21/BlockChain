import React from "react";
import { getHashElements, getHash } from "./crypt";

const Block = ({ blockdata, children, setChildBlock, childBlock }) => {
  let hashClass = "text-center mx-3 ";
  let cardClass = "card text-center col-md-6 my-5 p-0 shadow mb-5 rounded ";
  console.log(blockdata);
  let isChanged = !blockdata.curr.startsWith("0000");
  if (isChanged) {
    hashClass += "text-danger";
    cardClass += "border-danger";
  } else {
    hashClass += "text-primary";
    cardClass += "border-primary";
  }

  const mineHash = () => {
    let hashElements = getHashElements(
      blockdata.id,
      blockdata.data,
      blockdata.prev
    );
    setChildBlock(
      childBlock.map((block) =>
        block.id === blockdata.id
          ? {
              ...block,
              curr: hashElements.hash,
              nonce: hashElements.nonce,
            }
          : block
      )
    );
  };

  const updateBlock = (e, id) => {
    console.log(id);
    let data = e.target.value;
    setChildBlock(
      childBlock.map((block) =>
        block.id === id
          ? {
              ...block,
              data: data,
              curr: getHash(data, block.data, block.prev, id),
            }
          : block
      )
    );
  };

  return (
    <div className={cardClass}>
      <div className="card-footer ">
        <strong>Block ID : {blockdata.id}</strong>
      </div>
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <div className=" card-text">Data</div>
          {blockdata.id === 0 ? (
            <div className="form-control text-muted mx-3">{blockdata.data}</div>
          ) : (
            <input
              className="form-control mx-3"
              onChange={(e) => updateBlock(e, blockdata.id)}
              value={blockdata.data}
            ></input>
          )}
        </div>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <small className=" card-text">Hash</small>
          <small className={hashClass}>{blockdata.curr}</small>
        </div>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <small className=" card-text">Previous Hash</small>
          <small className={hashClass}>{blockdata.prev}</small>
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
              {blockdata.nonce}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Block;
