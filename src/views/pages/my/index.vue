<template>
  <section class="top-section">
    <div class="page-content">
      <div class="title">
        <div class="subtitle">
          {{ $t(`general.my.${$route.meta.pageCategory}`) }}
        </div>
        <h1>{{ $t(`general.my.${$route.meta.pageName}`) }}</h1>
      </div>
    </div>
  </section>

  <section class="shell">
    <div class="page-content">
      <aside>
        <ul class="navigation">
          <li class="category">
            <div class="category-name">
              <span>{{ $t('general.my.settings') }}</span>
            </div>
            <ul class="category-content">
              <li class="link">
                <router-link :to="{ name: 'MyProfile' }">
                  <span>{{ $t('general.my.profile') }}</span>
                </router-link>
              </li>
              <li class="link">
                <router-link :to="{ name: 'MySecurity' }">
                  <span>{{ $t('general.my.security') }}</span>
                </router-link>
              </li>
            </ul>
          </li>
          <li class="category">
            <div class="category-name">
              <span>{{ $t('general.my.content') }}</span>
            </div>
            <ul class="category-content">
              <li class="link">
                <router-link :to="{ name: 'MyPhotos' }">
                  <span>{{ $t('general.my.photos') }}</span>
                </router-link>
              </li>
              <li class="link">
                <router-link :to="{ name: 'MyReviews' }">
                  <span>{{ $t('general.my.reviews') }}</span>
                </router-link>
              </li>
              <li class="link">
                <router-link :to="{ name: 'MyTrips' }">
                  <span>{{ $t('general.my.trips') }}</span>
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
      </aside>
      <div class="content">
        <router-view />
      </div>
    </div>
  </section>
</template>
