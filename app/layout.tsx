export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html>
            <head />
            <body>
                <div>테스트 진행중</div>
                <div>{children}</div>
            </body>
        </html>
    )
}
