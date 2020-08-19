import React from 'react';
import './spinner.scss';

const Spinner = () => {
  return (
    <div className="spinner-fade">
      <div className="default-spinner spinner-border" role="status"></div>
    </div>
  );
};

export default Spinner;
