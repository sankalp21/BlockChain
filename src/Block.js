import React from "react";

const Block = ({
  blockId = 0,
  data = "",
  hash = "",
  prev = "",
  nonce = 0,
  className = "",
  isChanged = false,
}) => {
  return (
    <div className={className}>
      <div className="card-header">Block ID : {blockId}</div>
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <div className=" card-text">Data</div>
          {blockId === 0 ? (
            <div className="form-control text-muted mx-3">{data}</div>
          ) : (
            <input value={data} className="form-control mx-3" />
          )}
        </div>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <div className=" card-text">Hash</div>
          <div className="text-center text-muted mx-3">{hash}</div>
        </div>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <div className=" card-text">Previous</div>
          <div className="text-center text-muted mx-3">{prev}</div>
        </div>
      </div>
      <div className="card-footer ">
        <div className="d-flex justify-content-between align-items-center">
          {isChanged && (
            <div className="p-2 mining">
              <button className="btn btn-primary">Mine</button>
            </div>
          )}
          <div className="p-2 ">
            <div
              className="card-text text-muted text-center "
              data-toggle="tooltip"
              title="Nonce"
            >
              {nonce}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Block;
