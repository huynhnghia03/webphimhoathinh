import { notFound } from "next/navigation";

export async function getMovies(id?: number) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/topic/AllTopics/${id || 1}`, { next: { revalidate: 60 } });
    if (!res.ok) {
        return notFound();
    }
    return res.json();
}

export async function getSchedules() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/topic/getSchedules`, { next: { revalidate: 30 } });
    if (!res.ok) {
        return notFound();
    }
    return res.json();
}

export async function getMovieById(slug: string) {
    if (slug == "path-to-placeholder-image.jpg") {
        return
    }
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/topic/${slug}/detail`, { next: { revalidate: 60 } });
        console.log(res)
        if (!res.ok) {
            // Handle HTTP errors based on status codes
            if (res.status === 404) {
                console.error(`Movie not found for slug: ${slug}`);
                return notFound();
            } else {
                throw new Error(`Failed to fetch data: ${res.statusText}`);
            }
        }
        const data = await res.json();
        // Check if the data is in the expected format
        if (!data || typeof data !== 'object') {
            throw new Error('Invalid data format');
        }
        return data;
    } catch (error) {
        console.error('Error fetching movie by slug:', error);
        return null;  // Return null or a default value if needed
    }
}

export async function getMovieBySlugRelation(slug: string) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/topic/${slug}/relation`, {
            credentials: 'include',
            method: 'GET',
            cache: "no-cache",
        });
        if (!res.ok) {
            throw new Error(`Failed to fetch data: ${res.statusText}`);
        }
        return res.json();
    } catch (error) {
        console.error('Error fetching movie relations by slug:', error);
        return null;
    }
}

export async function getHotMovie() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/topic/hotMovie`, { next: { revalidate: 60 } });
    if (!res.ok) {
        return notFound();
    }
    return res.json();
}

export async function getEpisoden(slug: string, episoden: string) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/episoden/${slug}/${episoden}`, { next: { revalidate: 30 } });
        if (!res.ok) {
            throw new Error(`Failed to fetch data: ${res.statusText}`);
        }
        return res.json();
    } catch (error) {
        console.error('Error fetching episoden:', error);
        return null;
    }
}

export async function createTopic(data: any) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/topic/create`, {
            method: 'POST',
            credentials: 'include',
            body: data,
        });
        if (!res.ok) {
            throw new Error(`Failed to create topic: ${res.statusText}`);
        }
        return res.json();
    } catch (error) {
        console.error('Error creating topic:', error);
        return null;
    }
}

export async function updateTopic(id: string, data: any) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/topic/${id}/update`, {
            method: 'POST',
            credentials: 'include',
            body: data,
        });
        if (!res.ok) {
            throw new Error(`Failed to update topic: ${res.statusText}`);
        }
        return res.json();
    } catch (error) {
        console.error('Error updating topic:', error);
        return null;
    }
}

export async function createFile(id: string, data: any) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/topic/${id}/uploadFile`, {
            method: 'POST',
            credentials: 'include',
            body: data,
        });
        if (!res.ok) {
            throw new Error(`Failed to upload file: ${res.statusText}`);
        }
        return res.json();
    } catch (error) {
        console.error('Error uploading file:', error);
        return null;
    }
}

export async function deleteTopic(id: string) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/topic/${id}/delete`, {
            method: 'DELETE',
            credentials: 'include',
        });
        if (!res.ok) {
            throw new Error(`Failed to delete topic: ${res.statusText}`);
        }
        return res.json();
    } catch (error) {
        console.error('Error deleting topic:', error);
        return null;
    }
}

export async function createVideo(id: string, episoden: any) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/episoden/${id}/create`, {
            method: 'POST',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(episoden),
        });
        if (!res.ok) {
            throw new Error(`Failed to create video: ${res.statusText}`);
        }
        return res.json();
    } catch (error) {
        console.error('Error creating video:', error);
        return null;
    }
}

export async function updateVideo(id: string, episoden: any) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/episoden/${id}/update`, {
            method: 'POST',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(episoden),
        });
        if (!res.ok) {
            throw new Error(`Failed to update video: ${res.statusText}`);
        }
        return res.json();
    } catch (error) {
        console.error('Error updating video:', error);
        return null;
    }
}

export async function deleteVideo(id: string) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/episoden/${id}/delete`, {
            method: 'DELETE',
            credentials: 'include',
        });
        if (!res.ok) {
            throw new Error(`Failed to delete video: ${res.statusText}`);
        }
        return res.json();
    } catch (error) {
        console.error('Error deleting video:', error);
        return null;
    }
}

export async function getDetailVideo(slug: string, episoden: string) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/episoden/${slug}/${episoden}`, { next: { revalidate: 30 } });
        if (!res.ok) {
            throw new Error(`Failed to fetch video details: ${res.statusText}`);
        }
        return res.json();
    } catch (error) {
        console.error('Error fetching video details:', error);
        return null;
    }
}

export async function login(data: { email: string, password: string }) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify(data),
        });
        if (!res.ok) {
            throw new Error(`Login failed: ${res.statusText}`);
        }
        return res.json();
    } catch (error) {
        console.error('Error logging in:', error);
        return null;
    }
}

export async function logOut() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/logout`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
        });
        if (!res.ok) {
            throw new Error(`Logout failed: ${res.statusText}`);
        }
        return res.json();
    } catch (error) {
        console.error('Error logging out:', error);
        return null;
    }
}
