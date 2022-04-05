import Link from 'next/link';

export default function LinkExtenal({
  children,
  href,
  target,
  ...props
}: LinkExternal) {
  return (
    <Link href={href}>
      <a href={href} target={target} {...props}>
        {children}
      </a>
    </Link>
  );
}

type LinkExternal = {
  children: React.ReactNode;
  href: string;
  target?: string;
};
