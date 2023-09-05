//import { MaterialIcons } from '@expo/vector-icons'
import { IButtonProps } from '@gluestack-ui/button/lib/typescript/types'
import {
  ButtonSpinner,
  ButtonText,
  Button as GButton,
} from '@gluestack-ui/themed'

type IconProps =
  | {
      //materialIconName?: keyof typeof MaterialIcons.glyphMap
      icon?: undefined
    }
  | {
      materialIconName?: undefined
      icon?: React.ReactNode
    }
type ButtonProps = Omit<IButtonProps, 'icon' | 'children'> & {
  onPress?: () => void
  alignIcon?: 'left' | 'right'
  loading?: boolean
} & IconProps

export default function Button({
  loading,
  children,
}: React.PropsWithChildren<ButtonProps>) {
  return (
    <GButton
      h={60}
      sx={{
        bg: '#000',
        ':hover': {
          opacity: 0.7,
          _text: {
            color: '$white',
          },
        },
        ':active': {
          bg: '#1f1f1f',
          _text: {
            color: '$white',
          },
        },
      }}
      isDisabled={loading}
      gap="$2"
    >
      {loading && <ButtonSpinner />}
      {/* <MaterialIcons name="alarm" color="#fff" size={18} /> */}
      <ButtonText>{children}</ButtonText>
    </GButton>
  )
}
