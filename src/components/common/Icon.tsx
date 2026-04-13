import Github from '@/assets/svg/AiFillGithub.svg'
import Tag from '@/assets/svg/AiFillTag.svg'
import LeftArrow from '@/assets/svg/AiOutlineLeft.svg'
import Grid from '@/assets/svg/BiSolidGridAlt.svg'
import List from '@/assets/svg/List.svg'
import Mail from '@/assets/svg/FiMail.svg'
import Global from '@/assets/svg/RiGlobalLine.svg'
import Clock from '@/assets/svg/BiTime.svg'
import Cursor from '@/assets/svg/BsCursor.svg'
import Sun from '@/assets/svg/BsFillSunFill.svg'
import Moon from '@/assets/svg/AiFillMoon.svg'

export const ICONS = {
  Github,
  Tag,
  LeftArrow,
  Sun,
  Grid,
  List,
  Mail,
  Global,
  Clock,
  Cursor,
  Moon
} as const

export type IconName = keyof typeof ICONS

export type IconProps = {
  name: IconName
  size?: 12 | 14 | 16 | 18 | 20 | 24
} & React.SVGProps<SVGSVGElement>

export function Icon({ name, size = 16, ...props }: IconProps) {
  const SvgComponent = ICONS[name]
  return (
    <SvgComponent
      width={size}
      height={size}
      {...props}
    />
  )
}
