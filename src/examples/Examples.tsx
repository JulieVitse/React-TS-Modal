import './Examples.scss'
import { MultipleModals } from './multiple_modals/MultipleModals'
import { AllPropsModal } from './all_props_modal/AllPropsModal'
import { SimpleUsage } from './simple_usage/SimpleUsage'

export function Examples() {
    return (
      <section className="examples">
        <h2 className="examples__title">
          Here are a few examples of modal usage
        </h2>
        <div className="example-wrapper">
          <p className="example-wrapper__title">
            Basic modal with only required & default props
          </p>
          <div className="example">
            <div className={`codeblock ${'codeblock-2'}`}>
              <code>
                <p>&lt;Modal</p>
                <p className="ind-1">isOpen= &#123;isOpen&#125;</p>
                <p className="ind-1">closeModal= &#123;closeModal&#125;</p>
                &gt;
                <p className="ind-1">&lt;p&gt;Simple modal content&lt;/p&gt;</p>
                <p>&lt;/Modal&gt;</p>
              </code>
            </div>
            <SimpleUsage />
          </div>
        </div>

        <div className="example-wrapper">
          <p className="example-wrapper__title">Usage of multiple modals</p>
          <div className="example">
            <div className={`codeblock ${'codeblock-2'}`}>
              <code>
                <p>function App() &#123;</p>
                <p className="ind-1">
                  const &#123; isOpen: isOpenConfirm, openModal:
                  openModalConfirm, closeModal: closeModalConfirm &#125; =
                  useModal()
                </p>
                <p className="ind-1">
                  const &#123; isOpen: isOpenForm, openModal: openModalForm,
                  closeModal: closeModalForm &#125; = useModal()
                </p>
                <br />
                <p className="ind-1">return (</p>
                <p className="ind-2">
                  &lt;button onClick=&#123;() =&gt; openModalConfirm()&#125;&gt;
                </p>
                <p className="ind-2">
                  &lt;button onClick=&#123;() =&gt; openModalForm()&#125;&gt;
                </p>
                <br />
                <p className="ind-2">&lt;Modal</p>
                <p className="ind-3">isOpen= &#123;isOpenConfirm&#125;</p>
                <p className="ind-3">
                  closeModal= &#123;closeModalConfirm&#125;
                </p>
                <p className="ind-3">textContent="I am a confirm modal"</p>
                <p className="ind-2">/&gt;</p>

                <p className="ind-2">&lt;Modal</p>
                <p className="ind-3">isOpen= &#123;isOpenForm&#125;</p>
                <p className="ind-3">closeModal= &#123;closeModalForm&#125;</p>
                <p className="ind-3">
                  ChildComponent=&#123;&lt;Form name=&#123;"Form
                  component"&#125; /&gt;&#125;
                </p>
                <p className="ind-2">/&gt;</p>
                <p className="ind-1">)</p>
                <p>&#125;</p>
              </code>
            </div>
            <MultipleModals />
          </div>
        </div>

        <div className="example-wrapper">
          <p className="example-wrapper__title">
            Modal with most of the available props
          </p>
          <div className="example">
            <div className={`codeblock ${'codeblock-2'}`}>
              <code>
                <p>
                  const onAfterCloseFunction = () =&gt; &#123; alert('Modal has
                  been closed') &#125;
                </p>
                <p className="comment">
                  {' '}
                  &#47;&#47; Note that the above function should be placed
                  before the return in your parent component
                </p>
                <p>&lt;Modal</p>
                <p className="ind-1">isOpen=&#123;isOpen&#125;</p>
                <p className="ind-1">closeModal=&#123;closeModal&#125;</p>
                <p className="ind-1">modalVisible="visible"</p>
                <p className="ind-1">escToClose=&#123;false&#125;</p>
                <p className="ind-1">clickOverlayClose=&#123;false&#125;</p>
                <p className="ind-1">showClose=&#123;true&#125;</p>
                <p className="ind-1">closeText="Exit"</p>
                <p className="ind-1">modalTitle="Example title"</p>
                <p className="ind-1">textContent="Example text content"</p>
                <p className="ind-1">
                  htmlContent="&lt;img src="https://picsum.photos/200/300"
                  /&gt;"
                </p>
                <p className="ind-1">animationClass="fade"</p>
                <p className="ind-1">animationDuration=".5s"</p>
                <p className="ind-1">
                  onAfterClose=&#123;onAfterCloseFunction&#125;
                </p>
                <p className="ind-1">afterCloseEventDelay=&#123;500&#125;</p>
                <p className="ind-1">showSpinner=&#123;true&#125;</p>
                <p className="ind-1">spinnerDuration=&#123;2000&#125;</p>
                <p className="ind-1">overlayClass="customOverlay"</p>
                <p className="ind-1">modalClass="customModal"</p>

                <p>/&gt;</p>
              </code>
            </div>
            <AllPropsModal />
          </div>
        </div>
      </section>
    )
}