const pu_key = 'BGp2OAG6t6apT04SBg5f1LY6ut4TrLsZzJnPxr5qBzf7hMekbuX0iwg1-dqh93-h-qTQOV9ebwQFj1IwYzdW7rE';

function urlBase64ToUint8Array(base64String) {
    const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
    const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");
  
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);
  
    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}

if('serviceWorker' in navigator)
{
    window.addEventListener('load', async() => {
        try 
        {
            const reg = await navigator.serviceWorker.register('./serviceworker.js', {scope: '/'});
            const subscription = await reg.pushManager.subscribe({
                userVisibleOnly: true,
                applicationServerKey: urlBase64ToUint8Array(pu_key)
            });

            await fetch('http://localhost:3001/subscription', {
                method: 'POST',
                body: JSON.stringify(subscription),
                headers:{
                    "Content-Type": "application/json"
                }
            });

            console.log('Success: ', reg.scope);
        } 
        catch(error) 
        {
            console.log('Failure: ', error);
        }
    });
}