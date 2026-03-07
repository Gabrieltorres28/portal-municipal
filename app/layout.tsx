import type { Metadata } from 'next';
import './globals.css';
import MunicipalChatbot from './components/chat/municipal-chatbot';

export const metadata: Metadata = {
  title: 'Municipalidad de El Alcázar | Portal Oficial',
  description: 'Portal oficial del municipio de El Alcázar, Misiones. Accedé a noticias, trámites, servicios y toda la información institucional.',
  keywords: 'El Alcázar, Misiones, municipalidad, gobierno local, trámites, servicios municipales',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="font-sans antialiased">
        {children}
        <MunicipalChatbot />
      </body>
    </html>
  );
}
