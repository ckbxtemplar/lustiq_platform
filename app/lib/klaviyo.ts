export async function subscribeToKlaviyo(email: string, list: string): Promise<{ success: boolean; error?: any }> {
  const KLAVIYO_API_KEY = process.env.KLAVIYO_API_KEY!;
  
  let LIST_ID = null;
  switch (list) {
    case 'newsletter':
      LIST_ID = process.env.KLAVIYO_LIST_ID_NEWSLETTER;
      break;
    case 'regist':
      LIST_ID = process.env.KLAVIYO_LIST_ID_REGIST;
      break;
    case 'subscriber':
      LIST_ID = process.env.KLAVIYO_LIST_ID_SUBSCRIBERS;
      break;
    case 'unsubscriber':
      LIST_ID = process.env.KLAVIYO_LIST_ID_UNSUBSCRIBERS;
      break;
    default:
      LIST_ID = null;
  }

  if (!LIST_ID) return { success: false, error: 'Missing list ID' };

  try {
    // 1. LEKÉRDEZEM A PROFILT EMAIL ALAPJÁN
    const searchParams = new URLSearchParams({
      'filter': `equals(email,"${email}")`,
      'fields[profile]': 'email',
      'page[size]': '1'
    });

    const profileLookupRes = await fetch(`https://a.klaviyo.com/api/profiles?${searchParams.toString()}`, {
      method: 'GET',
      headers: {
        accept: 'application/vnd.api+json',
        revision: '2025-04-15',
        Authorization: `Klaviyo-API-Key ${KLAVIYO_API_KEY}`
      }
    });

    if (!profileLookupRes.ok) {
      const err = await profileLookupRes.json();
      console.error('Klaviyo: Failed to fetch profile', err);
      return { success: false, error: err };
    }

    const lookupData = await profileLookupRes.json();
    let profileId: string | null = lookupData?.data?.[0]?.id || null;

    // 2. HA NINCS TALÁLAT, LÉTREHOZOM A PROFILT
    if (!profileId) {
      const profileCreateRes = await fetch('https://a.klaviyo.com/api/profiles/', {
        method: 'POST',
        headers: {
          accept: 'application/vnd.api+json',
          revision: '2025-04-15',
          'content-type': 'application/vnd.api+json',
          Authorization: `Klaviyo-API-Key ${KLAVIYO_API_KEY}`,
        },
        body: JSON.stringify({
          data: {
            type: 'profile',
            attributes: {
              email,
            },
          },
        }),
      });

      if (!profileCreateRes.ok) {
        const err = await profileCreateRes.json();
        console.error('Klaviyo: Failed to create profile', err);
        return { success: false, error: err };
      }

      const createdProfile = await profileCreateRes.json();
      profileId = createdProfile?.data?.id;

      if (!profileId) {
        console.error('Klaviyo: Missing profile ID after creation');
        return { success: false, error: 'Missing profile ID after creation' };
      }
    }

    // 3. FELIRATKOZTATÁS A MEGFELELŐ LISTÁRA
    const listRes = await fetch(
      `https://a.klaviyo.com/api/lists/${LIST_ID}/relationships/profiles/`,
      {
        method: 'POST',
        headers: {
          accept: 'application/vnd.api+json',
          revision: '2025-04-15',
          'content-type': 'application/vnd.api+json',
          Authorization: `Klaviyo-API-Key ${KLAVIYO_API_KEY}`,
        },
        body: JSON.stringify({
          data: [{ type: 'profile', id: profileId }],
        }),
      }
    );

    if (!listRes.ok) {
      const err = await listRes.json();
      console.error('Klaviyo: Failed to subscribe to list', err);
      return { success: false, error: err };
    }

    return { success: true };
  } catch (err) {
    console.error('Klaviyo error:', err);
    return { success: false, error: err };
  }
}
