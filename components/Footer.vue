<template>
  <nav class="flex items-center justify-between flex-wrap bg-indigo p-2 pin-b z-10">
    <div class="flex-grow flex items-center w-auto">
      <div class="text-sm flex-grow">
        <a
          href="https://lichter.io/legal"
          rel="nofollow noopener"
          target="_blank"
          class="inline-block mt-0 mr-2 text-indigo-lightest hover:text-white no-underline"
        >
          Legal notice
        </a>
        <a
          href="https://lichter.io/privacy"
          rel="nofollow noopener"
          target="_blank"
          class="inline-block mt-0 text-indigo-lightest hover:text-white no-underline"
        >
          Privacy policy
        </a>
      </div>
      <div class="flex items-center flex-no-shrink text-white">
        <a
          class="font-hairline text-sm mr-2 flex items-center text-grey-light no-underline hover:text-white"
          href="https://github.com/manniL/thanks.lichter.io"
          target="_blank"
          rel="noopener"
        >
          <span class="mr-1">
            v{{ $options.version }}
          </span>
          <GithubIcon class="block w-8 h-8 fill-current" />
        </a>
      </div>
    </div>
  </nav>
</template>
<script>
import { version } from '~/package.json'

import GithubIcon from '~/assets/icons/github.svg'

export default {
  components: {
    GithubIcon
  },
  version
}
</script>
