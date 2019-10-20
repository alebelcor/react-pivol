/** @jsx jsx */
import { Fragment, useState } from 'react';
import { jsx } from '@emotion/core';

import {
  headerStyle,
  headingStyle,
  mainStyle,
  formStyle,
  fieldsetContainerStyle,
  fieldsetStyle,
  legendDefaultStyle,
  legendSuccessStyle,
  legendFailStyle,
  labelStyle,
  inputDefaultStyle,
  inputFailStyle,
  errorStyle,
} from '../styles/App.css';

import { PI } from '../utils/constants';

const App = () => {
  const [value, setValue] = useState('');
  const [volume, setVolume] = useState(0);
  const [isIncorrect, setIsIncorrect] = useState(false);

  const currentLegendStyle = isIncorrect ? legendFailStyle : (volume > 0 ? legendSuccessStyle : legendDefaultStyle);
  const currentInputStyle = isIncorrect ? inputFailStyle : inputDefaultStyle;

  const handleChange = e => {
    e.preventDefault();

    const inputValue = e.target.value;
    const inputValueLength = inputValue.length;

    setValue(inputValue);

    if (isIncorrect) {
      if (inputValueLength === 0) {
        setIsIncorrect(false);
      } else {
        return;
      }
    }

    if (inputValue === PI.substring(0, inputValueLength)) {
      setVolume(inputValueLength);
    } else {
      setVolume(0);
      setIsIncorrect(true);
    }
  };

  const handleKeyDown = e => {
    if (e.keyCode === 27) { // esc
      setValue('');
      setVolume(0);
      setIsIncorrect(false);
    }
  };

  return (
    <Fragment>
      <header css={headerStyle}>
        <h1 css={headingStyle}>
          PiVol – Volume Control
        </h1>
      </header>

      <main css={mainStyle}>
        <form css={formStyle} onSubmit={e => e.preventDefault()}>
          <div css={fieldsetContainerStyle}>
            <fieldset css={fieldsetStyle}>
              <legend css={currentLegendStyle}>
                <div role="status" aria-live="polite">
                  Current volume: <strong>{volume}%</strong>
                </div>
              </legend>

              <label htmlFor="pi" css={labelStyle}>
                <abbr title="Pi">π</abbr>:
              </label>

              <input
                id="pi"
                type="tel"
                maxLength="100"
                placeholder="Please enter Pi for volume"
                value={value}
                aria-describedby="pi-description"
                css={currentInputStyle}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
              />

              {isIncorrect ? (
                <div id="pi-description" role="alert" css={errorStyle}>
                  Failed, try again.
                </div>
              ) : (
                <div id="pi-description" css={errorStyle}></div>
              )}
            </fieldset>
          </div>
        </form>
      </main>
    </Fragment>
  );
};

export default App;
