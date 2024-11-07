<template>
  <event-banner-section
    :event-main-description="eventPageData?.EventBanner.EventMainDescription"
    :event-main-title="eventPageData?.EventBanner.EventMainTitle"
  />
  <event-trend-section
    :event-trend-title="eventPageData?.EventTrendSection.EventTrendTitle"
  />
  <event-upcoming-section
    :event-incoming-section-title="
      eventPageData?.EventIncoming.EventIncomingSectionTitle
    "
    :-event-incoming-section-description="
      eventPageData?.EventIncoming.EventIncomingSectionDescription
    "
  />
  <event-past-section
    :event-past-section-title="eventPageData?.EventPast.EventPastSectionTitle"
    :event-past-section-description="
      eventPageData?.EventPast.EventPastSectionDescription
    "
  />
</template>

<script lang="ts" setup>
const eventPageStore = useEventPageStore();
const { records: eventPageData } = storeToRefs(eventPageStore);

async function fetchHomeData() {
  await eventPageStore.get({ populate: "*" });
}
fetchHomeData();
</script>

<style></style>
