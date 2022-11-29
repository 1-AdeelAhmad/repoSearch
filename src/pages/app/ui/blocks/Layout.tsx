import { LayoutProps } from '../../common/types/components';

import Block from './Block';

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className='mx-auto'>
            <div className='flex flex-col items-center w-full overflow-clip h-screen pb-10'>
                {/* Title */}
                <Block>
                    <h1 className='font-bold text-2xl'>GitHub Repos</h1>
                </Block>
                {children}
            </div>
        </div>
    );
};

export default Layout;
