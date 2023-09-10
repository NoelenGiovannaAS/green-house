import * as Styles from './AssignNewsLetter.styles'
import ImagePlantHeader from '@assets/image-plant-header.png'
import { AssignNewsLetterTexts } from './AssignNewsLetterTexts'
import { AssignNewsLetterInput } from './AssignNewsLetterInput'

export const AssignNewsLetter = () => {
  return (
    <Styles.Container>
      <div>
        <AssignNewsLetterTexts />
        <AssignNewsLetterInput />
      </div>
      <Styles.Image>
        <img src={ImagePlantHeader} alt="image plant aside" />
      </Styles.Image>
    </Styles.Container>
  )
}
