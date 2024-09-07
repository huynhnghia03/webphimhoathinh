'use server'
import { Movie } from '@/common/dataTopicDto';
import { cookies } from 'next/headers'
import { notFound } from "next/navigation";

export async function getMovies(id?: number) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/topic/AllTopics/${id || 1}`, { next: { revalidate: 3 } });
    if (!res.ok) {
        return notFound();
    }
    return res.json();
}

export async function getSchedules() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/topic/getSchedules`, { next: { revalidate: 3 } });
    if (!res.ok) {
        return notFound();
    }
    return res.json();
}

export async function getMovieById(slug: string) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/topic/${slug}/detail`, { next: { revalidate: 0.5 } });

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
            return notFound();
        }
        return data;
    } catch (error) {
        return notFound();
    }
}

export async function getMovieBySlugRelation(slug: string) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/topic/${slug}/relation`, {
            headers: {
                'Authorization': `Bearer ${cookies().get('user_token')?.value}`
            },
            method: 'GET',
        });
        if (!res.ok) {
            return notFound();
        }
        return res.json();
    } catch (error) {
        return notFound();
    }
}

export async function getHotMovie() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/topic/hotMovie`, { next: { revalidate: 3600 } });
    if (!res.ok) {
        return notFound();
    }
    return res.json();
}

export async function getEpisoden(slug: string, episoden: string) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/episoden/${slug}/${episoden}`);

        if (!res.ok) {
            return notFound();
        }

        const data = await res.json();
        return data as Movie;

    } catch (error) {
        return notFound();
    }
}

export async function createTopic(data: any) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/topic/create`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${cookies().get('user_token')?.value}` // Nếu cần
            },
            body: data,
        });
        if (!res.ok) {
            return notFound();
        }
        return res.json();
    } catch (error) {
        return notFound();
    }
}

export async function updateTopic(id: string, data: any) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/topic/${id}/update`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${cookies().get('user_token')?.value}` // Nếu cần
            },
            body: data,
        });
        if (!res.ok) {
            return notFound();
        }
        return res.json();
    } catch (error) {
        return notFound();
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
            headers: {
                'Authorization': `Bearer ${cookies().get('user_token')?.value}` // Nếu cần
            },
        });
        if (!res.ok) {
            return notFound();
        }
        return res.json();
    } catch (error) {
        return notFound();
    }
}

export async function createVideo(id: string, episoden: FormData) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/episoden/${id}/create`, {
            method: 'POST',
            headers: {
                // 'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${cookies().get('user_token')?.value}`
            },
            body: episoden,
        });
        if (!res.ok) {
            return notFound();
        }
        return res.json();
    } catch (error) {
        return notFound();
    }
}

export async function updateVideo(id: string, episoden: FormData) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/episoden/${id}/update`, {
            method: 'Post',
            headers: {
                'Authorization': `Bearer ${cookies().get('user_token')?.value}`
            },
            body: episoden,
        });
        if (!res.ok) {
            return notFound();
        }
        return res.json();
    } catch (error) {
        return notFound();
    }
}

export async function deleteVideo(id: string) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/episoden/${id}/delete`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${cookies().get('user_token')?.value}` // Nếu cần
            },
        });
        if (!res.ok) {
            return notFound();
        }
        return res.json();
    } catch (error) {
        return notFound();
    }
}

export async function getDetailVideo(slug: string, episoden: string) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/episoden/${slug}/${episoden}`);

        if (!res.ok) {
            return notFound();
        }
        return res.json();
    } catch (error) {
        return notFound();
    }
}


export async function login(data: { email: string, password: string }) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });
        if (!res.ok) {
            return notFound();
        }
        const datas = await res.json()
        cookies().set({
            name: 'user_token',
            value: datas.user_token,
            httpOnly: true,
            secure: true,
            sameSite: 'lax',
            path: '/',
            maxAge: 60 * 60
        })
        return datas;
    } catch (error) {
        return notFound();
    }
}

export async function logOut() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/logout`, {
            method: 'POST',
            headers: { 'Authorization': `Bearer ${cookies().get('user_token')?.value}` },
        });
        if (!res.ok) {
            return notFound();
        }
        cookies().delete('user_token')
        return res.json();
    } catch (error) {
        return notFound();
    }
}
