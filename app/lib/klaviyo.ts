export async function subscribeToKlaviyo(email: string, list: string): Promise<{ success: boolean; error?: any }> {
  const KLAVIYO_API_KEY = process.env.KLAVIYO_API_KEY!;
  const LIST_ID = list === 'newsletter'
  ? process.env.KLAVIYO_LIST_ID_NEWSLETTER
  : process.env.KLAVIYO_LIST_ID_REGIST;

	try {
    const profileRes = await fetch('https://a.klaviyo.com/api/profiles/', {
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
    if (!profileRes.ok) {
      const err = await profileRes.json();
      return { success: false, error: err };
    }

    const profileData = await profileRes.json();
    const profileId = profileData?.data?.id;

    if (!profileId) {
      return { success: false, error: 'Missing profile ID' };
    }

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
      return { success: false, error: err };
    }

    return { success: true };
  } catch (err) {
    console.error('Klaviyo error:', err);
    return { success: false, error: err };
  }
}
