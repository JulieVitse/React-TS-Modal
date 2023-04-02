interface IPropDesc {
  name: string
  value: any
  description: string
}

export function PropDesc({ name, value, description }: IPropDesc) {
  return (
    <div className="prop-wrapper">
      <p className="ind-3">{name}=&#123; </p>
      <p className="ind-4">{value} </p>
      <p className="comment ind-4">
        {description}<span>&#125;</span>
      </p>
    </div>
  )
}
