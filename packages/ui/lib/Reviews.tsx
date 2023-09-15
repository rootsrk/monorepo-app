import { StarIcon } from '@heroicons/react/20/solid';
import { defineMessages, useIntl } from 'react-intl';
import { twMerge } from 'tailwind-merge';

const messages = defineMessages({
  reviews: {
    defaultMessage: 'Reviews',
    id: 'dUxyza',
  },
  outOf5Stars: {
    defaultMessage: ' out of 5 stars',
    id: 'CKmiyC',
  },
  seeAllReviews: {
    defaultMessage: 'See all {reviewCount} reviews',
    id: 'rA2umh',
  },
});

export function ReviewCard({
  rating,
  reviewCount,
  href,
}: {
  rating: number;
  reviewCount: number;
  href: string;
}) {
  const { formatMessage } = useIntl();

  return (
    <div className="mt-4">
      <h2 className="sr-only">{formatMessage(messages.reviews)}</h2>
      <div className="flex items-center">
        <p className="text-sm text-gray-7">
          {rating}
          <span className="sr-only">{formatMessage(messages.outOf5Stars)}</span>
        </p>
        <div className="ml-1 flex items-center">
          {[0, 1, 2, 3, 4].map((rating) => (
            <StarIcon
              key={rating}
              className={twMerge(
                rating > rating ? 'text-upgrade-4' : 'text-upgrade-2',
                'h-5 w-5 flex-shrink-0'
              )}
              aria-hidden="true"
            />
          ))}
        </div>
        <div aria-hidden="true" className="ml-4 text-sm text-gray-3">
          ·
        </div>
        <div className="ml-4 flex">
          <a
            href={href}
            className="text-sm font-medium text-primary-6 hover:text-primary-5"
          >
            {formatMessage(messages.seeAllReviews, {
              reviewCount,
            })}
          </a>
        </div>
      </div>
    </div>
  );
}
