import { StarIcon } from '@heroicons/react/20/solid';
import { defineMessages, useIntl } from 'react-intl';
import { twMerge } from 'tailwind-merge';

const messages = defineMessages({
  reviews: {
    defaultMessage: 'Reviews',
    id: 'dUxyza',
  },
  outOf5Stars: {
    defaultMessage: '{rating} out of 5 stars',
    id: 'Wp2bK6',
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
      <div className="flex items-center align-middle">
        <p className="text-sm text-gray-9">
          {rating}
          <span className="sr-only">
            {formatMessage(messages.outOf5Stars, {
              rating,
            })}
          </span>
        </p>
        <div className="ml-1 flex items-center">
          {[1, 2, 3, 4, 5].map((i) => (
            <StarIcon
              key={rating}
              className={twMerge(
                i < rating ? 'text-upgrade-6' : 'text-upgrade-3',
                'h-[22px] w-[22px] flex-shrink-0'
              )}
              aria-hidden="true"
            />
          ))}
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
