import PropTypes from 'prop-types';
import './Parent.css';

function Child(props) {
  function changefun(event) {
    event.preventDefault();
    const name = document.getElementById("idname").value;
    const salary = document.getElementsByName("tb")[0].value;
    const location = document.getElementsByName("tb")[1].value;
    const age = document.getElementsByName("tb")[2].value;
    props.changeUser(name, salary, location, age);
  }

  return (
    <div className='input-box'>
      <form onSubmit={changefun} className="form">
        <div className="form-title"><span>Update User</span></div>
        <div className="title-2"><span>HERE</span></div>
        <fieldset>
          <label className="input-container">
            Name: <input type="text" id="idname" className="input" />
          </label>
          <label className="input-container">
            Salary: <input type="text" name="tb" className="input" />
          </label>
          <label className="input-container">
            Location: <input type="text" name="tb" className="input" />
          </label>
          <label className="input-container">
            Age: <input type="text" name="tb" className="input" />
          </label>
          <button type="submit" className="submit">Change</button>
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
}

Child.propTypes = {
  changeUser: PropTypes.func.isRequired,
};

export default Child;
