import { abilities } from '../constants/index.js'

const FeatureCards = () => {
  return (
    <div>
      <div>
        {abilities.map(({ imgPath, title, desc}) => (
          <div key={title} className="card-border rounded-xl p-8 flex flex-col gap-4">
            <div className="size-14 flex items-center justify-center rounded-full">
              <img src={imgPath} alt={title} />
            </div>
            <h3>{title}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FeatureCards