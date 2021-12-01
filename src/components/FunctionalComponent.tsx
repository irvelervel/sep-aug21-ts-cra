interface FunctionalComponentProps {
  title: string
  subTitle?: string
}

const FunctionalComponent = ({ title, subTitle }: FunctionalComponentProps) => {
  return (
    <div>
      <h1>{title}</h1>
      <h3>{subTitle || ''}</h3>
    </div>
  )
}

export default FunctionalComponent
