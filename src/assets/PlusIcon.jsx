function PlusIcon({ className, width = "24px", height = "24px", fill = "transparent", stroke = "currentColor" }) {
  return (
    <svg className={className} width={width} height={height} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" fill={fill} />
      <path d="M12 6V18" stroke={stroke} stroke-linecap="round" stroke-linejoin="round" />
      <path d="M6 12H18" stroke={stroke} stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  )
}

export default PlusIcon
