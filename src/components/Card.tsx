import React from 'react';
import { twMerge } from 'tailwind-merge';
import { Link, LinkProps } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { PostType } from '@/types/post';

interface CardProps extends LinkProps {
  post: Partial<PostType>;
}

const Card: React.FC<CardProps> = ({ to, post }) => {
  return (
    <Link
      to={to}
      className={twMerge(
        'space-y-5 rounded-md border-2 border-base-post bg-base-post p-8',
        'hover:border-base-label',
        'hover:transition-all',
      )}
    >
      <div className="flex items-center justify-between">
        <h4 className="flex flex-[0.75] text-lg font-bold text-base-title">
          {post.title}
        </h4>
        <span className="flex flex-[0.25] justify-end text-base-span">
          {formatDistanceToNow(new Date(post.created_at!), {
            locale: ptBR,
            addSuffix: false,
          })}
        </span>
      </div>
      <p className="line-clamp-4 overflow-hidden text-ellipsis text-base-text">
        {post.body}
      </p>
    </Link>
  );
};

export { Card };
