import { BlockProps } from '../../common/types/components';

const Block = ({ children, col }: BlockProps) => {
    return (
        <div data-testid='blockComponent' className='my-5 w-full max-w-5xl'>
            <div
                data-testid='blockContainer'
                className={`flex ${
                    col && 'flex-col items-center'
                } flex-wrap w-full justify-center gap-5`}
            >
                {children}
            </div>
        </div>
    );
};

export default Block;
