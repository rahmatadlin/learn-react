import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  const { locale } = router;

  // Define translations
  const translations = {
    'en-US': {
      about: 'About',
      contact: 'Contact Us',
      food: 'Our Food',
      drink: 'Our Drink',
    },
    'id-ID': {
      about: 'Tentang Kami',
      contact: 'Hubungi Kami',
      food: 'Makanan Kami',
      drink: 'Minuman Kami',
    },
    'kr': {
      about: '회사 소개',
      contact: '문의하기',
      food: '우리 음식',
      drink: '우리 음료',
    },
  };

  // Set the current translations based on the locale
  const t = translations[locale] || translations['en-US'];

  return (
    <header>
      <Link href="/">
        <img src="/images/logo/nike-logo.svg" alt="nike logo" width={100} />
      </Link>
      <Link href="/about">{t.about}</Link>
      <Link href="/contact-us">{t.contact}</Link>
      <Link href="/menu/makanan">{t.food}</Link>
      <Link href="/menu/minuman">{t.drink}</Link>
    </header>
  );
}
