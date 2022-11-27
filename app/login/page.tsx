import LoginSample from "../../src/components/login/LoginSample"
import { Category, fetchCategoryBySlug } from "../../src/utils/getCategory"

const fetchCategory = async (
    categorySlug: string | undefined,
): Promise<Category | undefined> => {
    // artificial delay
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // if (!categorySlug) return

    return await fetchCategoryBySlug(categorySlug)
}

const testPromise = async () => {
    let promise = new Promise(function (resolve, reject) {
        setTimeout(() => resolve("완료!"), 1000)
    })

    return await promise
        .then((data) => {
            console.log(data)
            return true
        })
        .catch((error) => {
            return false
        })
}

async function page() {
    const category = await testPromise()
    if (!category) return null

    return (
        <div>
            <LoginSample />
        </div>
    )
}

export default page
