import './Examples.scss'
import { MultipleModals } from './multiple_modals/MultipleModals'
import { NestedComponent } from './nested_component/NestedComponent'
import { SimpleUsage } from './simple_usage/SimpleUsage'

export function Examples() {
    return (
      <section className='examples'>
        <SimpleUsage />

        <MultipleModals />

        <NestedComponent />
      </section>
    )
}