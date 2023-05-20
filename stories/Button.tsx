import React from 'react';
import './button.css';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
    type="submit" 
    className={'w-full flex justify-center active:bg-black text-xl font-bold md:w-[100%] rounded-full p-3 mb-10 sm:mb-0 text-white mt-4 bg-black hover:bg-teal-900 transition-colors'}
      // {...props}
    >
      {label}
      <style jsx>{`
        button {
          background-color: ${backgroundColor};
        }
      `}</style>
    </button>

/* <button type="submit" className='w-full flex justify-center active:bg-black text-xl font-bold md:w-[100%] rounded-full p-3 mb-10 sm:mb-0 text-white mt-4 bg-black hover:bg-teal-900 transition-colors'>
Send
</button>  */
  );
};
