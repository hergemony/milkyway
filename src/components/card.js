import { StyledCard } from './styles/Card.styled'
import { Button } from './styles/Button.styled'

export default function Card({ item: { id, title, body, image } }) {
  return (
    <StyledCard layout={id % 2 === 0 && 'row-reverse'}>
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>

      <div>
        <img src={`./images/${image}`} alt='duckonthgrass.jpg' />

        </div>

        <div>

        <Button bg='#ff0099' color='#fff'>
              Buy it Now
            </Button>
      </div>
    </StyledCard>
  )
}