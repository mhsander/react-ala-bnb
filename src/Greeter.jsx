import React from 'react';
import PropTypes from 'prop-types';


export default function Greeter({name, mood, time}) {
  const formattedDate = new Date(time);

  return (
    <div>
      <section>
        <h2>{`Greetings, ${name}!`}</h2>
        <h2>How is it going?</h2>
        <h3>{`Everything is ${mood}.`}</h3>

        <h3>{`Today is ${formattedDate}`}</h3>
        <button>update time!</button>

      </section>
    </div>
  );
}

Greeter.propTypes = {
  name: PropTypes.string.isRequired,
  mood: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
}

