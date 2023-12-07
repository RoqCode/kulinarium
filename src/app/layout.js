import Navbar from './components/layout/Navbar';

import '../styles/globals.scss';
import '../styles/layout.scss';

export const metadata = {
  title: 'Kulinarium | Rezept Manager',
  description:
    'Mit dieser App kannst du nach Rezepten suchen und deine eigenen Rezepte verwalten.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
