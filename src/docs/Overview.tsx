import './Overview.scss'
import { PropDesc } from './PropDesc'

export function Overview() {
  const htmlString = "'<div>Insert HTML</div>'"
  return (
    <div className="overview">
      <p className="App-intro">
        A simple fullscreen modal component for React.JS
      </p>

      <section className="ov-wrapper">
        <h2>Installation</h2>
        <p>
          To install the latest version, you can use{' '}
          <a href="https://npmjs.org/">npm</a> or{' '}
          <a href="https://yarnpkg.com/">yarn</a>.
        </p>
        <div className="codeblock">
          <code>$ npm install julie-v-react-modal</code>
          <code>$ yarn add julie-v-react-modal</code>
        </div>
      </section>

      <section className="ov-wrapper">
        <h2>General Usage</h2>
        <p>
          To use the modal, you will need to import the custom hook{' '}
          <code className="sp-code">useModal()</code> along with the modal
          component itself. The only required props are{' '}
          <code className="sp-code">isOpen</code> and{' '}
          <code className="sp-code">closeModal</code>, which indicates whether
          the modal should be displayed, and a function to close the modal.
          <br />
          The following is an example of using the modal specifying all the
          possible props:
        </p>
        <div className={`codeblock ${'codeblock-2'}`}>
          <code>
            <p>
              <span className="sp-i">import</span> &#123;{' '}
              <span className="sp-b">Modal, useModal</span> &#125;{' '}
              <span className="sp-i">from </span>
              <span className="sp-g">'julie-v-react-modal'</span>
            </p>
            <p>function App() &#123;</p>
            <p className="ind-1">
              const &#123; isOpen, openModal, closeModal &#125; = useModal()
            </p>
            <p className="ind-1">
              const onAfterCloseFunction = () =&gt; &#123; console.log('Modal
              closed') &#125;
            </p>
            <p className="ind-1">return (</p>
            <p className="ind-2">
              &lt;button onClick=&#123;() =&gt; openModal()&#125;&gt;
            </p>
            <p className="ind-2">&lt;Modal</p>
            <PropDesc
              name="isOpen"
              value="isOpen"
              description="/* State variable (boolean) stored in the useModal hook, describing if the modal should be shown or not.*/"
            />
            <PropDesc
              name="closeModal"
              value="closeModal"
              description="/* Function to close the modal from the useModal hook*/"
            />
            <PropDesc
              name="modalVisible"
              value="'visible'"
              description="/* String (default: 'visible') className of the modal when it is visible (controls opacity and visibility)*/"
            />
            <PropDesc
              name="showClose"
              value="true"
              description="/* Boolean (default: true) indicating if the close button is displayed*/"
            />
            <PropDesc
              name="closeText"
              value="'Close'"
              description="/* String (default: 'Close') containing the text displayed in the close button */"
            />
            <PropDesc
              name="escToClose"
              value="true"
              description="/* Boolean (default: true) indicating if the modal can be closed by pressing the escape key*/"
            />
            <PropDesc
              name="clickOverlayClose"
              value="true"
              description="/* Boolean (default: true) indicating if the modal can be closed by clicking on the overlay*/"
            />
            <PropDesc
              name="onAfterClose"
              value="onAfterCloseFunction"
              description="/* Function (default: null) to be executed after the modal has been closed*/"
            />
            <PropDesc
              name="afterCloseEventDelay"
              value="500"
              description="/* Number (default: 0) indicating the delay in ms before the onAfterClose function is executed*/"
            />
            <PropDesc
              name="modalClass"
              value="'modalClassName'"
              description="/*String (default: undefined) additional className for the modal div*/"
            />
            <PropDesc
              name="overlayClass"
              value="'overlayClassName'"
              description="/*String (default: undefined) additional className for the modal overlay div*/"
            />
            <PropDesc
              name="modalTitle"
              value="'Modal Title'"
              description="/* String (default: undefined) containing the title of the modal*/"
            />
            <PropDesc
              name="textContent"
              value="'Example text content'"
              description="/* String (default: undefined) containing the text to be displayted inside the modal content div*/"
            />
            <PropDesc
              name="htmlContent"
              value={htmlString}
              description="/* String (default: null) containing some HTML content to be displayed in the modal content div*/"
            />
            <PropDesc
              name="ChildComponent"
              value="&lt;ChildComponent props=&#123;'componentProps'&#125; /&#62;"
              description="/* React Component (default: null) to be displayed inside the modal content div*/"
            />
            <PropDesc
              name="animationClass"
              value="'fade'"
              description="/* String (default: 'fade') className to be applied to the modal when it is opened or closed*/"
            />
            <PropDesc
              name="animationDuration"
              value="'0.3s'"
              description="/* String (default: '0.3s') duration of the open/close animation*/"
            />
            <PropDesc
              name="showSpinner"
              value="true"
              description="/* Boolean (default: false) indicating if a spinner should be displayed while the modal is opening*/"
            />
            <PropDesc
              name="customSpinner"
              value="'&lt;div&#62;Loading...&lt;/div&#62;'"
              description="/* String (default: undefined) containing some HTML content to be displayed as a custom spinner*/"
            />
            <PropDesc
                name="spinnerDuration"
                value="2000"
                description="/* Number (default: 1000) in ms indicating the duration during which the spinner is displayed before the modal content appears*/"
            />
            <p className="ind-2">&#47;&gt;</p>
            <p className="ind-1">)</p>
            &#125;
          </code>
        </div>
      </section>
    </div>
  )
}
