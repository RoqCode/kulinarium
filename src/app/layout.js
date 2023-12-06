import Navbar from './components/layout/Navbar';

import { Inter } from 'next/font/google';
import layout from '../styles/layout.module.scss';
import '../styles/globals.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Kulinarium | Rezept Manager',
  description:
    'Mit dieser App kannst du nach Rezepten suchen und deine eigenen Rezepte verwalten.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${layout.red}`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
