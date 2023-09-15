import { RadioGroup } from '@headlessui/react';
import { ReviewCard } from '@rootsrk/ui';
import { useState } from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { twMerge } from 'tailwind-merge';

import { policies, product } from './data';

const messages = defineMessages({
  addToCart: {
    defaultMessage: 'Add to cart',
    id: 'ADKef8',
  },
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
  images: {
    defaultMessage: 'Images',
    id: 'Fip4H8',
  },
  color: {
    defaultMessage: 'Color',
    id: 'uMhpKe',
  },
  chooseAColor: {
    defaultMessage: 'Choose a color',
    id: 'w6zCgp',
  },
  size: {
    defaultMessage: 'Size',
    id: 'agOXPD',
  },
  seeSizingChart: {
    defaultMessage: 'See sizing chart',
    id: 'tZ6EcA',
  },
  chooseASize: {
    defaultMessage: 'Choose a size',
    id: 'Jmqy3p',
  },
  description: {
    defaultMessage: 'Description',
    id: 'Q8Qw5B',
  },
  fabricAndCare: {
    defaultMessage: 'Fabric &amp; Care',
    id: '2vV6BU',
  },
  ourPolicies: {
    defaultMessage: 'Our Policies',
    id: '8ncHTQ',
  },
});

export function Product() {
  const { formatMessage } = useIntl();

  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]);

  return (
    <div className="bg-gray-1">
      <div className="pb-16 pt-6 sm:pb-24">
        <nav
          aria-label="Breadcrumb"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <ol className="flex items-center space-x-4">
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a
                    href={breadcrumb.href}
                    className="mr-4 text-sm font-medium text-gray-9"
                  >
                    {breadcrumb.name}
                  </a>
                  <svg
                    viewBox="0 0 6 20"
                    aria-hidden="true"
                    className="h-5 w-auto text-gray-6"
                  >
                    <path
                      d="M4.878 4.34H3.551L.27 16.532h1.327l3.281-12.19z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a
                href={product.href}
                aria-current="page"
                className="font-medium text-primary-6 hover:text-primary-4"
              >
                {product.name}
              </a>
            </li>
          </ol>
        </nav>
        <div className="mx-auto mt-8 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
            <div className="lg:col-span-5 lg:col-start-8">
              <div className="flex justify-between">
                <h1 className="text-xl font-medium text-gray-9">
                  {product.name}
                </h1>
                <p className="text-xl font-medium text-gray-9">
                  {product.price}
                </p>
              </div>
              {/* Reviews */}
              <ReviewCard
                rating={product.rating}
                reviewCount={product.reviewCount}
                href="/reviews"
              />
            </div>

            {/* Image gallery */}
            <div className="mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0">
              <h2 className="sr-only">{formatMessage(messages.images)}</h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 lg:gap-8">
                {product.images.map((image) => (
                  <img
                    key={image.id}
                    src={image.imageSrc}
                    alt={image.imageAlt}
                    className={twMerge(
                      image.primary
                        ? 'lg:col-span-2 lg:row-span-2'
                        : 'hidden lg:block',
                      'rounded-lg'
                    )}
                  />
                ))}
              </div>
            </div>

            <div className="mt-8 lg:col-span-5">
              <form>
                {/* Color picker */}
                <div>
                  <h2 className="text-sm font-medium text-gray-9">
                    {formatMessage(messages.color)}
                  </h2>

                  <RadioGroup
                    value={selectedColor}
                    onChange={setSelectedColor}
                    className="mt-2"
                  >
                    <RadioGroup.Label className="sr-only">
                      {formatMessage(messages.chooseAColor)}
                    </RadioGroup.Label>
                    <div className="flex items-center space-x-3">
                      {product.colors.map((color) => (
                        <RadioGroup.Option
                          key={color.name}
                          value={color}
                          className={({ active, checked }) =>
                            twMerge(
                              color.selectedColor,
                              active && checked ? 'ring ring-offset-1' : '',
                              !active && checked ? 'ring-2' : '',
                              'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none'
                            )
                          }
                        >
                          <RadioGroup.Label as="span" className="sr-only">
                            {color.name}
                          </RadioGroup.Label>
                          <span
                            aria-hidden="true"
                            className={twMerge(
                              color.bgColor,
                              'border-black h-8 w-8 rounded-full border border-opacity-10'
                            )}
                          />
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div>

                {/* Size picker */}
                <div className="mt-8">
                  <div className="flex items-center justify-between">
                    <h2 className="text-sm font-medium text-gray-9">
                      {formatMessage(messages.size)}
                    </h2>
                    <a
                      href="/sizing"
                      className="text-sm font-medium text-primary-6 hover:text-primary-5"
                    >
                      {formatMessage(messages.seeSizingChart)}
                    </a>
                  </div>

                  <RadioGroup
                    value={selectedSize}
                    onChange={setSelectedSize}
                    className="mt-2"
                  >
                    <RadioGroup.Label className="sr-only">
                      {formatMessage(messages.chooseASize)}
                    </RadioGroup.Label>
                    <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
                      {product.sizes.map((size) => (
                        <RadioGroup.Option
                          key={size.name}
                          value={size}
                          className={({ active, checked }) =>
                            twMerge(
                              size.inStock
                                ? 'cursor-pointer focus:outline-none'
                                : 'cursor-not-allowed opacity-25',
                              active
                                ? 'ring-2 ring-primary-5 ring-offset-2'
                                : '',
                              checked
                                ? 'border-transparent bg-primary-6 text-gray-1 hover:bg-primary-7'
                                : 'border-gray-2 bg-gray-1 text-gray-9 hover:bg-gray-5',
                              'flex items-center justify-center rounded-md border border-gray-9 px-3 py-3 text-sm font-medium uppercase sm:flex-1'
                            )
                          }
                          disabled={!size.inStock}
                        >
                          <RadioGroup.Label as="span">
                            {size.name}
                          </RadioGroup.Label>
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div>

                <button
                  type="submit"
                  className="mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-primary-6 px-8 py-3 text-base font-medium text-gray-1 hover:bg-primary-7 focus:outline-none focus:ring-2 focus:ring-primary-5 focus:ring-offset-2"
                >
                  {formatMessage(messages.addToCart)}
                </button>
              </form>

              {/* Product details */}
              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-9">
                  {formatMessage(messages.description)}
                </h2>

                <div
                  className="prose prose-sm mt-4 text-gray-8"
                  dangerouslySetInnerHTML={{ __html: product.description }}
                />
              </div>

              <div className="mt-8 border-t border-gray-2 pt-8">
                <h2 className="text-sm font-medium text-gray-9">
                  {formatMessage(messages.fabricAndCare)}
                </h2>

                <div className="prose prose-sm mt-4 text-gray-8">
                  <ul>
                    {product.details.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Policies */}
              <section aria-labelledby="policies-heading" className="mt-10">
                <h2 id="policies-heading" className="sr-only">
                  {formatMessage(messages.ourPolicies)}
                </h2>

                <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  {policies.map((policy) => (
                    <div
                      key={policy.name}
                      className="rounded-lg border border-gray-2 bg-gray-3 p-6 text-center"
                    >
                      <dt>
                        <policy.icon
                          className="mx-auto h-6 w-6 flex-shrink-0 text-gray-9"
                          aria-hidden="true"
                        />
                        <span className="mt-4 text-sm font-medium text-gray-9">
                          {policy.name}
                        </span>
                      </dt>
                      <dd className="mt-1 text-sm text-gray-9">
                        {policy.description}
                      </dd>
                    </div>
                  ))}
                </dl>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
