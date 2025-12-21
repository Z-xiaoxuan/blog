import { Mail, Github, XiaoHongShu, WeChat } from './icons'

const components = {
  mail: Mail,
  github: Github,
  xiaohongshu: XiaoHongShu,
  weChat: WeChat,
}

type SocialIconProps = {
  kind: keyof typeof components
  href: string | undefined
  size?: number
}

const SocialIcon = ({ kind, href, size = 8 }: SocialIconProps) => {
  if (
    !href ||
    (kind === 'mail' && !/^mailto:[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(href))
  )
    return null

  const SocialSvg = components[kind]

  return (
    <a className="transition" target="_blank" rel="noopener noreferrer" href={href}>
      <span className="sr-only">{kind}</span>
      <SocialSvg
        className={`hover:text-primary-500 dark:hover:text-primary-400 fill-current transition-all hover:scale-105 hover:brightness-90 active:scale-90 dark:hover:brightness-150 h-${size} w-${size}`}
      />
    </a>
  )
}

export default SocialIcon
