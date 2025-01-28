export const useSettings = async () => {
  const siteSettings = useState('settings', () => null)
  const version = useEnvironment()
  const storyblokApi = useStoryblokApi()
  const { data: settings } = await useAsyncData(
    'settings',
    async () => {
      return await storyblokApi.get('cdn/stories/global', {
        version,
        resolve_links: 'url'
      })
    }
  )

  siteSettings.value = settings.value

  watch(settings, (newSettings) => {
    siteSettings.value = newSettings
  })

  return siteSettings
}
