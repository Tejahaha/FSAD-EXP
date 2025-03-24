import { useState } from 'react';
import Child from '../ex3/Child';
import './Parent.css';

const Parent = () => {
  const [name, setName] = useState("n1");
  const [salary, setSalary] = useState("0");
  const [location, setLocation] = useState("n1");
  const [age, setAge] = useState("0");

  const display = () => {
    return (
      <div className='display'>
        <form className="form">
          <div className="form-title"><span>User Details</span></div>
          <div className="title-2"><span>INFO</span></div>
          <fieldset>
            <label className="input-container">
              Name: <input type="text" value={name} readOnly className="input" />
            </label>
            <label className="input-container">
              Salary: <input type="text" value={salary} readOnly className="input" />
            </label>
            <label className="input-container">
              Location: <input type="text" value={location} readOnly className="input" />
            </label>
            <label className="input-container">
              Age: <input type="text" value={age} readOnly className="input" />
            </label>
          </fieldset>
          <section className="bg-stars">
            <span className="star"></span>
            <span className="star"></span>
            <span className="star"></span>
            <span className="star"></span>
          </section>
        </form>
      </div>
    );
  };

  const changeUser = (n, s, l, a) => {
    setName(n);
    setSalary(s);
    setLocation(l);
    setAge(a);
  };

  return (
    <div className='parent-container'>
      <div className='left-half'>
        {display()}
      </div>
      <div className='right-half'>
        <Child changeUser={changeUser} />
      </div>
    </div>
  );
};

export default Parent;
