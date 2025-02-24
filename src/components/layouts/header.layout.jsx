import React from 'react';
import { Button } from '../ui/button';
import { SERVICE_LIST } from '@/config/app.config.js';
import Icon from '../ui/icon';

function Header() {
  return (
    <header className="bg-brand py-2">
      <div className="container flex justify-between items-center">
        <div id="logo-wrapper">
          <a href="#" aria-label="Go to Booking.com">
            <img width={144} height={24} src="/public/assets/booking.com.svg" />
          </a>
        </div>
        <div id="auth" className="flex gap-2 justify-center items-center">
          <Button className="bg-white cursor-pointer border-primary text-primary rounded-sm hover:bg-white/105">
            Register
          </Button>
          <Button className="bg-white cursor-pointer border-primary text-primary rounded-sm hover:bg-white/105">
            Login
          </Button>
        </div>
      </div>
      <div className="container flex gap-1 overflow-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-blue-200">
        {SERVICE_LIST.map((item) => (
          <Button key={item.id} className={`bg-transparent shadow-none font-normal rounded-full hover:bg-white/10
          cursor-pointer flex items-center justify-between gap-2 px-6 h-11 ${item.active && 'border border-white'}`}>
            {item.icon && <Icon icon={item.icon} />}{' '}
            {/* Render only if icon exists */}
            {item.title}
          </Button>
        ))}
      </div>
    </header>
  );
}

export default Header;
