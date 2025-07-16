import React from 'react';
import Card from '@/components/about/CardTest';

const GridExample: React.FC = () => {
  return (
    <section className='bg-background dark:bg-black relative overflow-hidden py-1'>
        <div className="container mx-auto px-4 md:px-6">
        <h1 className="text-2xl font-bold mb-6 text-center">Meu Layout de Grid Personalizado</h1>

        {/* Container do Grid */}
        {/*
            - grid-cols-1: Por padrão (telas muito pequenas/mobile), 1 coluna.
            - sm:grid-cols-3: A partir do breakpoint 'sm' (640px por padrão), 3 colunas.
        */}
        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 auto-rows-fr">
            {/* Linha 1, Coluna 1 */}
            <Card
            title="Card Top-Left"
            description="Este é o card na posição superior esquerda."
            />

            {/* Linha 1 e 2, Coluna 2 (Card Central que ocupa 2 linhas) */}
            {/*
            - row-span-2: Mantém o card ocupando 2 linhas.
                No modo mobile (1 coluna), ele ainda ocupará o espaço de "duas linhas",
                mas como só há uma coluna, ele simplesmente ficará mais alto.
            - sm:col-span-1 sm:row-span-2: No breakpoint 'sm', garante que ele ocupe 1 coluna
                e 2 linhas (já que o layout volta a ser 3 colunas).
                Em mobile (grid-cols-1), o `col-span` não precisa ser redefinido,
                pois cada item já ocupa a única coluna disponível.
            */}
            <div className="row-span-2 sm:col-span-1"> {/* Adicionei sm:col-span-1 para clareza, mas não é estritamente necessário aqui pois o item já ocupa 1 coluna por padrão em grid-cols-1 */}
            <Card
                title="Card Central (2 Linhas)"
                description="Este card ocupa duas linhas na coluna do meio. Sua altura é o dobro dos outros cards."
                className="h-full"
            />
            </div>

            {/* Linha 1, Coluna 3 */}
            <Card
            title="Card Top-Right"
            description="Este é o card na posição superior direita."
            />

            {/* Linha 2, Coluna 1 */}
            <Card
            title="Card Bottom-Left"
            description="Este é o card na posição inferior esquerda."
            />

            {/* Linha 2, Coluna 3 (Coluna 2 já está ocupada pelo Card Central) */}
            <Card
            title="Card Bottom-Right"
            description="Este é o card na posição inferior direita."
            />
        </ul>
        </div>
    </section>
  );
};

export default GridExample;